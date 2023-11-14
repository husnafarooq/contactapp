import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  {
    //localhost:4200 -> localhost:4200/contactManager
    path:'',redirectTo:'contactManager',pathMatch:'full'
  },
  //listing all contact details
  {
    path:'contactManager',component:ContactManagerComponent
  },
  // add new contact 
  {
    path:'contactManager/addContact',component:AddContactComponent
  },
  //view a particular contact
  {
    path:'contactManager/viewContact/:id',component:ViewContactComponent
  },
  //edit a particular contact
  {
    path:'contactManager/editContact/:contactId',component:EditContactComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
