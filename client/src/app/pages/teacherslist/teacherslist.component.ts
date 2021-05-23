import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { TEACHERSService } from '../../services/teachers.service';
// Import Models
import { TEACHERS } from '../../domain/smsystem_db/teachers';

// START - USED SERVICES
/**
* TEACHERSService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* TEACHERSService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of TEACHERS
 * @class TEACHERSListComponent
 */
@Component({
    selector: 'app-teacherslist',
    templateUrl: './teacherslist.component.html',
    styleUrls: ['./teacherslist.component.css']
})
export class TEACHERSListComponent implements OnInit {
    list: TEACHERS[];
    search: any = {};
    idSelected: string;
    constructor(
        private teachersService: TEACHERSService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.teachersService.list().subscribe(list => this.list = list);
    }

    /**
     * Select TEACHERS to remove
     *
     * @param {string} id Id of the TEACHERS to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected TEACHERS
     */
    deleteItem() {
        this.teachersService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
