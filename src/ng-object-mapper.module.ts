import { NgModule } from "@angular/core";
import { ObjectMapper } from "typescript-object-mapper";

@NgModule({
    imports: [],
    providers: [
        {
            provide: ObjectMapper,
            useFactory: () => {
                return new ObjectMapper();
            }
        }
    ],
    exports: []
})
export class NgObjectMapperModule {
}
