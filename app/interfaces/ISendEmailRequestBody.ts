export default interface ISendEmailRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  numOfSubjects: number | null;
}
