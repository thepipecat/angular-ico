import { OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export declare class AngularIconComponentConfig {
    baseUrl?: string;
}
export declare let COMP_CONFIG: AngularIconComponentConfig;
export declare class AngularIconComponent implements OnInit {
    private el;
    private http;
    name: string;
    autosize: boolean;
    constructor(el: ElementRef, http: HttpClient);
    ngOnInit(): void;
    private Setup();
}
