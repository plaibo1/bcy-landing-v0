import { type NextRequest, NextResponse } from "next/server";
import type { ApiFormData } from "@/lib/api";
import { EXTERNAL_API_BASE_URL } from "@/consts";

export async function POST(request: NextRequest) {
  try {
    // Получаем уже трансформированные данные из запроса
    const body: ApiFormData = await request.json();

    // Логируем данные в режиме разработки
    if (process.env.NODE_ENV === "development") {
      console.log("📤 Sending to external API:", body);
    }

    // Проксируем запрос на внешнее API
    const response = await fetch(`${EXTERNAL_API_BASE_URL}/v1/external-lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Передаем заголовки авторизации если они есть
        ...(request.headers.get("authorization") && {
          Authorization: request.headers.get("authorization")!,
        }),
      },
      body: JSON.stringify(body),
    });

    if (response.status === 201) {
      return NextResponse.json(response, { status: response.status });
    }

    // Получаем ответ от внешнего API
    const data = await response.json();

    // Логируем ответ в режиме разработки
    if (process.env.NODE_ENV === "development") {
      console.log("📥 Response from external API:", data);
    }

    // Возвращаем ответ с тем же статусом
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Ошибка при проксировании запроса external-lead:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Ошибка сервера при отправке заявки",
        code: "PROXY_ERROR",
      },
      { status: 500 }
    );
  }
}
