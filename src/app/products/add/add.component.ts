import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit {


  addFormModel = this.fb.group({

    id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    productName: ['', [Validators.required, Validators.pattern("[a-zA-Z ']+")]],
    categoryId: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    description: ['', [Validators.required, Validators.pattern("[0-9a-zA-Z !.,-_&']+")]],
    price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    productImage: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9:/._-]+')]],
    rating: ['', [Validators.required, Validators.pattern('[0-9 .]+')]],
    review: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    is_availiable: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]]


  })

  constructor(private fb: FormBuilder, private ds: DataService, private rout: Router) { }

  ngOnInit(): void {

  }

  // add product
  addNewProduct() {

    const path = this.addFormModel.value

    let productData = {

      id: path.id,
      productName: path.productName,
      categoryId: path.categoryId,
      description: path.description,
      price: path.price,
      productImage: path.productImage,
      rating: path.rating,
      review: path.review,
      is_availiable: path.is_availiable

    }



    this.ds.addProduct(productData).subscribe({
      next: (result: any) => {
        alert("New Product Added")
        this.rout.navigateByUrl("")
      }
    })
  }


}
