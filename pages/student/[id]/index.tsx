import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Head from 'next/head'
import axios from "axios";

import {StudentForm} from "../../../src/components";

import Config from "../../../src/config";
import Layout from "../../../src/components/Layout";


const StudentNew = () => {
  const router = useRouter()
  const query = router.query;
  const studentId = query.id;
  const [student, setStudent] = useState(undefined);

  useEffect(() => {
    if (!!studentId) {
      axios
        .get(`${Config.studentsApi}/${studentId}`)
        .then((response) => {
          setStudent((currentStudent: any) =>
            ({...(currentStudent as object), ...response.data}));
        })
        .catch((error) => {
          console.error("There was getting student info", error);
        });
    }
  }, [studentId]);

  return (
    <>
      <Head>
        <title>Update a student</title>
      </Head>
      <Layout content={
        <>
          <p className="subtitle">
            Updating student info
          </p>
          <StudentForm
            student={student}
            isNew={false}
          />
        </>
      }/>
    </>
  );
}

export default StudentNew;
