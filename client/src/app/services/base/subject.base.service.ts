/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE subjectBaseService PLEASE EDIT ../subject.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { SUBJECT } from '../../domain/smsystem_db/subject';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../SUBJECT.service.ts
 */

/*
 * SCHEMA DB SUBJECT
 *
	{
		Name: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		Subjects: [{
			type: Schema.ObjectId,
			ref : "STUDENTS"
		}],
	}
 *
 */
@Injectable()
export class SUBJECTBaseService {

    contextUrl: string = environment.endpoint + '/subject';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * SUBJECTService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: SUBJECT): Observable<SUBJECT> {
        return this.http
            .post<SUBJECT>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * SUBJECTService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * SUBJECTService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<SUBJECT> {
        return this.http
            .get<SUBJECT>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * SUBJECTService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<SUBJECT[]> {
        return this.http
            .get<SUBJECT[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * SUBJECTService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: SUBJECT): Observable<SUBJECT> {
        return this.http
            .post<SUBJECT>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
