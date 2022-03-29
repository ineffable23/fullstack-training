#### Day-20-ng-fun
# Tasks performed:

## Assignment :
No assignment for today

# Practice content:
- Angular 
- ``` ng new <project name> --style=css --routing=false ``
- ``` npm run start ``` can be used in place of ``` ng serve ``` if the terminal got closed/deleted
- class binding
- ng class directive
- ng style directive
- ``` * ``` denotes that this directive can hide or show a DOM
- ``` *ngIf ``` is a structural directive that will either show or hide the DOM
- ``` *ngFor ``` takes ```for-of ```loops that will either show or hide the DOM
- ``` ngNonBindable ```
- ``` ngSwitch ```
- Binding summary

- ``` ng generate application step1-communication -s -t --routing=false -S --style=css ``` 
    <br> We are generating a new project (new application) inside a project (an existing application). 
    <br> Here ```-s``` is for inline style, 
    <br> ```-t``` for inline template,
    <br> ```--routing=false``` means we don't need routing, 
    <br> ```-S ``` is to skip tests,
    <br> ```--style=css``` is for setting styles to css

- ```ng serve --project=step1-communication ``` command is used to serve new project ```step1-communication``` instead of the main project.

- ``` ng g component second -s -t --skipTests=true --project=step1-communication --flat ``` 
    <br> We are creating a new file ( ```second.component.ts``` ) inside the new project that we created ( ```step1-communication``` ). 
    <br> Here ```--flat``` means no separate folder, so the ```second.component.ts``` file will be created in the same project folder.
    <br> Here ```g``` is for generate.

- To pass short value/one value use attributes ``` Example : <app-second [cp]="power"></app-second> where [cp]="power" is attribute```. To pass long values/messages use inline templates using ```<ng-content></ng-content>```.

- ```ng g application step2-pipes -s -t --routing=false -S --style=css ``` <br> Here we created new file for implenting angular pipes. Pipes are formatters.

- I18n stands for internationalization
