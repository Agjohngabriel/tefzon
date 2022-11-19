import Link from "next/link";
import Layout from "../../../components/Layouts";

const Index = () => {
  return (
    <Layout>
      <div className="inline-flex -ml-1 rounded">
        <Link href="/wallet" passHref>
          <a className="font-montserrat text-sm text-[#240155] ml-5 md:ml-10 lg:ml-24 mt-10 px-2   ">
            Home
          </a>
        </Link>
        <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
          navigate_next
        </span>

        <h1 className="font-montserrat  -ml-2 text-sm text-[#240155]  mt-10 px-2 ">
          Fixtures
        </h1>
      </div>

      <div id="sportmonks-widget" data-widget="livescore" data-info="xp4Q7blDCbmqUTDtGcI4xSUK0tIdK0DD7wOrMT1v4NS6aiIGaZ60sQhN3SKTB5UxKXG2e6CJuLFcZc0LN/Hsh4hAJtWlZBsWKVhzah7bmUCTQIBSZaGfVRrNLiGo0dMPykvZwOOgu1eb6GEkp4GDdqyR7nBPVI3iY2OBrUqSXYWhUabPh4RTbik65Nt2BP4XlVOEFZcnv0bthDukI9m3Pn1Ru+boI9cVFIGO1CUbbm+85NeMpTcuMUtemSbeLpFKxwldUmZTOCFDOq2L4e4n5MOmb3lHckFGsxr0wVy063uqE25wNqJuXFhtDYEB7YSLZqG08PEdcP12Cvpj77+bguMfSuaAwDNqkRs9BpgrecEiGy4UphnX5pXqHT/o4PyY2DOdvAu//eqKzE9CBLavM5Z/ePvFtKtzvHWNcabqhwdC6OM7NV6phX1E086pqI4MVTy6iMPwufL+J2WTpK4iQLV0TmnJiLVUuuRax5RdQvGS31wBzuwCLRI3utrlUNAVHBkDeiUJHI+NpEjCKkQcpHJpD+DBIFwERGGNmGO46FNdqxiGzEGacJX6JcLhpS2tGF+tie1AsgqKjYVOl9AdTr87APEhYILdEloQ/MrYM2Y4q33HBXPLZI+5JjzCtfotux/HALUI6IgjsMUoZqGNi1BKPSzchCix/43gAupk+CU=" data-switchtheme="false" data-tz="Africa/Lagos"></div>

    </Layout>
  );
};

export default Index;

