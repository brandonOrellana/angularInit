import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { GreetingPipePipe } from './greeting-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloWordComponent,
    ChildComponent,
    ParentComponent,
    GreetingPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
