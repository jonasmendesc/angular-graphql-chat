import { NgModule } from '@angular/core';
import { HttpLinkModule, HttpLink  } from 'apollo-angular-link-http';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class AolloConfigModule { 
  
  constructor(private apollo: Apollo, private httpLink: HttpLink ){
    
    const uri = 'https://api.graph.cool/simple/v1/cjouj5r4h2jc301062yyb6xvc';
    const http = httpLink.create({ uri });

    apollo.create({ link: http, cache: new InMemoryCache(), connectToDevTools: !environment.production })

  }


}
