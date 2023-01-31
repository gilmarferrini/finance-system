import { SignupService } from "./signup.service";
import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Signup } from "../../interfaces/signup";

describe(SignupService.name, () => {
  let service: SignupService;
  let httpTestingController: HttpTestingController;
  const mockData = {
    api: 'http://localhost:3333/users',
    data: {
      errors: [
        {error: 'Missing param error: firstName', key: 'firstName'},
        {error: 'Missing param error: lastName', key: 'lastName'},
        {error: 'Missing param error: email', key: 'email'},
        {error: 'Missing param error: password', key: 'password'},
        {error: 'Missing param error: salary', key: 'salary'},
        {error: 'Missing param error: currency', key: 'currency'}
      ],
      success: {
        id: '0d2564ec-e4aa-4488-9e5e-dbf3bbbbe53c',
        firstName: 'FirstName',
        lastName: 'Lastname',
        email: 'some_email@email.com',
        password: '12345678',
        salary: 2700.41,
        currency: 'BRL',
        createdAt: new Date()
      }
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupService],
      imports: [HttpClientTestingModule]
    })
    service = TestBed.inject(SignupService)
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  beforeEach(() => httpTestingController.verify())

  it (`#${SignupService.prototype.signup.name} should return errors if not provided fields`, done => {
    const userData = {} as Signup
    service.signup(userData).subscribe({
      next: (value) => {
        expect(value).toEqual(mockData.data.errors)
        done()
      }
    })
    httpTestingController.expectOne(mockData.api).flush(mockData.data.errors)
  })
})
