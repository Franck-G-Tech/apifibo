export async function POST(request: Request) {
  const body = await request.json();
  const value = body.value ?? 0;
 
  function fibonacci(value: number): number {
    if (value <= 1) return value;
    return fibonacci(value - 1) + fibonacci(value - 2);
  }
 
  const result = fibonacci(value);
 
  return new Response(JSON.stringify({ value, result }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}