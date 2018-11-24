// import { TestBed, inject } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// import { UserService } from './user.service';
// import { User } from './user';


// describe('UserService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         HttpClientTestingModule
//       ],
//       providers: [
//         UserService,
//       ]
//     });
//   });

//   afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
//     backend.verify();
//   }));

//   it('should be created', inject([UserService], (service: UserService) => {
//     expect(service).toBeTruthy();
//   }));

//   it('should create user', inject(
//     [UserService, HttpTestingController],
//     (userService: UserService, backend: HttpTestingController) => {
//       const userToCreate: User = {
//         name: 'John Travolta',
//         email: 'john@pulpfiction.com',
//         password: 'holymoly',
//         confirmPassword: 'holymoly'
//       };

//       userService
//         .create(userToCreate)
//         .subscribe(
//           next => expect(next).toBeNull()
//         );

//       backend
//         .expectOne(userService.url)
//         .flush(null, { status: 200, statusText: 'Ok' });
//   }));

//   it('should throw error if password not confirmed', inject(
//     [UserService, HttpTestingController],
//     (userService: UserService, backend: HttpTestingController) => {
//       const userToCreate: User = {
//         name: 'John Travolta',
//         email: 'john@pulpfiction.com',
//         password: 'holymoly',
//         confirmPassword: 'wrongpassword'
//       };

//       // userService
//       //   .create(userToCreate)
//       //   .subscribe(
//       //     next => expect(next).toBeNull()
//       //   );

//       // backend
//       //   .expectOne(userService.url)
//       //   .flush(null, { status: 200, statusText: 'Ok' });
//   }));
// });
