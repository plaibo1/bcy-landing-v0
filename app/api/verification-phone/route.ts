import { EXTERNAL_API_BASE_URL } from "@/consts";
import { type NextRequest, NextResponse } from "next/server";

interface VerificationRequest {
  phone: string;
  code?: string;
  action: "send" | "verify";
}

export async function POST(request: NextRequest) {
  try {
    // Получаем данные из запроса
    const body: VerificationRequest = await request.json();

    // Логируем данные в режиме разработки
    if (process.env.NODE_ENV === "development") {
      console.log("📤 Sending verification request:", {
        ...body,
        code: body.code ? "***" : undefined,
      });
    }

    // Проксируем запрос на внешнее API
    const response = await fetch(
      `${EXTERNAL_API_BASE_URL}/v1/verification/phone`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Передаем заголовки авторизации если они есть
          ...(request.headers.get("authorization") && {
            Authorization: request.headers.get("authorization")!,
          }),
        },
        body: JSON.stringify(body),
      }
    );

    // Получаем ответ от внешнего API
    const data = await response.json();

    // Логируем ответ в режиме разработки (без чувствительных данных)
    if (process.env.NODE_ENV === "development") {
      console.log("📥 Verification response:", data);
    }

    // Возвращаем ответ с тем же статусом
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error(
      "Ошибка при проксировании запроса verification-phone:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: "Ошибка сервера при верификации телефона",
        code: "PROXY_ERROR",
      },
      { status: 500 }
    );
  }
}
