import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'starshipUrlResize' })
export class MyCustomPipe  implements PipeTransform{
    transform(value: any) {
        return (value.substring(value.length - 1, 22));
    }

}