import { OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export declare class AngularIconComponentConfig {
    baseUrl?: string;
}
export declare class AngularIconComponent implements OnInit {
    private el;
    private http;
    private cfg;
    name: string;
    autosize: boolean;
    constructor(el: ElementRef, http: HttpClient, cfg: AngularIconComponentConfig);
    ngOnInit(): void;
    private Setup();
}
