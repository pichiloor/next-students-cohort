import {StudentForm} from "../../../src/components";
import Layout from "../../../src/components/Layout";
import Head from "next/head";

const StudentNew = () => {
  return (
    <>
      <Head>
        <title>Create a student</title>
      </Head>
      <Layout content={
        <>
          <p className="subtitle">
            Create a student
          </p>
          <StudentForm isNew={true}/>
        </>
      }/>
    </>
  );
}

export default StudentNew;
