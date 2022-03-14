import styles from "./styles.module.css";

const StudentItem = (props: any) => {
  const student = props.student;
  return (
    <a href={`/student/${student.id}`}>{student?.first_name ?? ""}</a>
    <Card>
      <CardContent>
         href={`/student/${student.id}`}>{student?.first_name ?? ""}
      </CardContent>     
     </Card>
  );
}

export default StudentItem;
