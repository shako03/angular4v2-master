
//ts აქვს განსხვავებული JS ის გან მხოლოდ ეს 2 ტიპი

export interface IStudent {

      name: string;
      age: number | null;
      grade: string;
      subject: string;
      isEnrolled: boolean;
      address: {
            street: string;
            city: string;
            zip: number | null;
      }
      activeType: ActiveType //ეს ფროფერთი ვერ მიღებს ვერასოდეს მნიშვნელობას გარდა ამ ჩამონათვლისა

}

enum ActiveType { //2 key-ვალუე აქვს მხოლოდ
      isactive = 1,
      notactive = 0
}


enum UserType { //ეს არის გასაკონტროლებლად მაგალითად რაღაც ჩამონათვალია და ამით შეგვიძლია ვაკონტროლოთ არის თუ არა ამ ჩამონათვალში რამე სხვა | ანუ აქ ვერავინ შეინახავს სხვა მნიშვნოლობას ამათ გარდა
      admin = "admin",
      user = "user"
}

enum Roles {
      manager = "Manager",
      viewer = "viewer"
}