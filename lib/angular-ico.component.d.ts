import { OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularIcoComponentConfig } from './angular-ico.config';
export declare class AngularIcoComponent implements OnInit {
    private el;
    private http;
    private cfg;
    name: string;
    autosize: boolean;
    constructor(el: ElementRef, http: HttpClient, cfg: AngularIcoComponentConfig);
    ngOnInit(): void;
    private Setup();
    private Transform(content);
}
