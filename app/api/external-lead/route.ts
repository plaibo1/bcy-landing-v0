import { type NextRequest, NextResponse } from "next/server"

const EXTERNAL_API_BASE_URL = "https://example.com"

export async function POST(request: NextRequest) {
  try {
    // Получаем данные из запроса
    const body = await request.json()

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
    })

    // Получаем ответ от внешнего API
    const data = await response.json()

    // Возвращаем ответ с тем же статусом
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error("Ошибка при проксировании запроса external-lead:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Ошибка сервера при отправке заявки",
        code: "PROXY_ERROR",
      },
      { status: 500 },
    )
  }
}
