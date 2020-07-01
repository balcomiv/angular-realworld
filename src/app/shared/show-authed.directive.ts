import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from './services';

@Directive({
  selector: '[appShowAuthed]',
})
export class ShowAuthedDirective implements OnInit, OnDestroy {
  @Input() set appShowAuthed(condition: boolean) {
    this.condition = condition;
  }

  private condition = false;

  private destroy$ = new Subject<void>();

  constructor(
    private templateRef: TemplateRef<any>,
    private userService: UserService,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.userService.isAuthenticated
      .pipe(takeUntil(this.destroy$))
      .subscribe((isAuthenticated) => {
        if (
          (isAuthenticated && this.condition) ||
          (!isAuthenticated && !this.condition)
        ) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
