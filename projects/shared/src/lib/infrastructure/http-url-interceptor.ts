import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {EnvironmentService} from "@shared";
import {Observable} from "rxjs";

@Injectable()
export class HttpUrlInterceptor implements HttpInterceptor {
  constructor(
    private readonly environmentService: EnvironmentService
  ) {
  }

  intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    req = req.clone({
      url: `${this.environmentService.getUrl()}${req.url}`
    });
    return next.handle(req);
  }
}
