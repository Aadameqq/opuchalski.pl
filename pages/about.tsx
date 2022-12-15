import Image from 'next/image';
import { Layout } from '../components/Layout';
import { SocialLinks } from '../components/SocialLinks';

const AboutPage = () => {
  return (
    <Layout
      customMeta={{
        title: 'Oskar Puchalski • O mnie',
        description:
          'O mnie - czyli dowiedz się trochę więcej czym się zajmuje',
      }}
    >
      <h1 className="text-3xl">O mnie</h1>
      <section className="flex flex-col justify-between gap-4 md:flex-row">
        <div className=" text-lg  md:w-1/2">
          <p>
            Siemka, dobrze Cię tu widzieć! Mam na imię Oskar i staram się
            tworzyć oprogramowanie które pomaga innym. Lubię przekazywać zdobytą
            wiedzę i to właśnie z tego powodu powstał ten blog!
          </p>
          <p>
            Poza kodowaniem lubię uprawiać sport jak koszykówka czy wspinaczka.
          </p>
          <p>
            Współtworzę projekt{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/puchaczlabel/"
            >
              @puchaczlabel
            </a>{' '}
            🦉
          </p>
          <p>Wpadnij na moje sociale 👇</p>
          <SocialLinks />
        </div>
        <div className="">
          <Image alt="" width="300" height="200" src="/images/about.jpeg" />
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
