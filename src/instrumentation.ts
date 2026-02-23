export async function register() {
  if (
    process.env.NODE_ENV === "development" &&
    process.env.NEXT_RUNTIME === "nodejs"
  ) {
    const { server } = await import("./mocks/http");
    server.listen({
      onUnhandledRequest(request, print) {
        if (request.url.includes("_next")) {
          return;
        }
        print.warning();
      },
    });
  }
}
