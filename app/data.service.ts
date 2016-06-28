import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";
import { List, Map } from 'immutable';

@Injectable()
export class DataService {

	public fruitOptions: Observable<Array<string>>;

	//mock data
	private _fruitOptions: Array<string> = ['apple', 'grape', 'banana'];

	constructor(){

		this.fruitOptions = Observable.create((observer:any) => {
			setTimeout(() => {
				observer.next(this._fruitOptions);
			}, 300);
		});
		
	}

}