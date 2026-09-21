import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './components/attribute-dir/attribute-dir.component';
import { IfComponent } from './components/if/if.component';
import { ForComponent } from './components/for/for.component';
import { PipeExComponent } from './components/pipe-ex/pipe-ex.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
    {path:'',redirectTo:'student',pathMatch:'full'},
    {path:'student',component:StudentComponent},
    {path:'studentList',component:StudentListComponent},
    {path:'structuralDir',component:StructuralDirComponent},
    {path:'attributeDir',component:AttributeDirComponent},
    {path:'if',component:IfComponent},
    {path:'for',component:ForComponent},
    {path:'pipe',component:PipeExComponent},
    {path:'template',component:TemplateFormComponent},
    {path:'reactive',component:ReactiveFormComponent},
    {path:'product',component:ProductComponent}

];
