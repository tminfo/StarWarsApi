import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'pilotUrlResize' })
export class PilotUrlPipe  implements PipeTransform{
    transform(value: any) {
        return (value.substr(-1, 10));
    }

}