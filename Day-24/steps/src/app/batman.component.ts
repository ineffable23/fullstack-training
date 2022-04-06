import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batman',
  template: `
    <h1>
      Batman says hii!
    </h1>
    <h2>Quantity : {{ quantity || "0" }}</h2>
    <h2>Version : {{ version || "0" }}</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ut quam saepe, quisquam, quo possimus vel laboriosam earum quos sit hic, ea in similique molestias? Optio excepturi unde repellendus consequuntur?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quaerat unde inventore repellat natus iure nulla quo perspiciatis ratione? Aliquam aliquid veniam a veritatis nostrum corporis repellendus voluptatem quod dolorem.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere neque perferendis ipsam nemo cum vero, voluptates quas quidem dicta qui consequuntur, perspiciatis ipsa illum necessitatibus optio ab, voluptatum dolorem!
    </p>
   
  `,
  styles: [
  ]
})
export class BatmanComponent implements OnInit {
  quantity:any;
  constructor(private ar:ActivatedRoute){ }

  ngOnInit(): void {
    this.quantity = this.ar.snapshot.params['qty']; // ar is activated route, snapshot takes the snapshot of the parameter when the content is loaded
  }

}
