declare module '@adonisjs/core/http' {
  interface HttpContext {
    render(children: any): string
  }
}
