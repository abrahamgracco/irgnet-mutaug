test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/vi/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  new Date(responseBody.updated_at).toISOString();

  expect(responseBody.dependencies.database.version).toEqual "16.0"
}); 
