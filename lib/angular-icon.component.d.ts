import { OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export declare class AngularIconComponent implements OnInit {
    private el;
    private http;
    static baseUrl: string;
    name: string;
    autosize: boolean;
    constructor(el: ElementRef, http: HttpClient);
    ngOnInit(): void;
    private Setup();
}
