import { OmbiCommonModules } from "../modules";
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

export type ButtonType = 'primary' | 'havemovie'; // Add other existing types if any

@Component({
    standalone: true,
    selector: 'ombi-button',
    imports: [...OmbiCommonModules, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <button 
        [id]="id" 
        [type]="type" 
        [class]="class" 
        [data-toggle]="dataToggle" 
        [data-target]="dataTarget"
        mat-raised-button
        [color]="type === 'havemovie' ? 'accent' : 'primary'"
        (click)="handleClick()">
        {{text}}
    </button>
    `
})
export class ButtonComponent {
    @Input() public text: string;
    @Input() public id: string;
    @Input() public type: ButtonType = "primary";
    @Input() public class: string;
    @Input('data-toggle') public dataToggle: string;
    @Input('data-target') public dataTarget: string;

    @Output() public haveMovieClick = new EventEmitter<void>();

    handleClick() {
        if (this.type === 'havemovie') {
            this.haveMovieClick.emit();
        }
    }
}
