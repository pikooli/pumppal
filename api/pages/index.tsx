import type { NextPage, GetServerSideProps } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'next-i18next';

import dayjs from 'lib/dayjs';
import i18n from 'lib/i18n';
import Layout from 'components/Layout';
import { gql } from '@apollo/client';
import client from 'lib/apollo-client';

interface Countrie {
  code: string;
  name: string;
}

export const getServerSideProps: GetServerSideProps = i18n.getTranslations(
  async () => {
    const { data } = await client.query({
      query: gql`
        query Countries {
          countries {
            code
            name
            emoji
          }
        }
      `,
    });

    return {
      props: {
        countries: data.countries.slice(0, 4) as Countrie[],
      },
    };
  },
);

const Home: NextPage<{ countries: Countrie[] }> = ({ countries }) => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <div className="">
        <p>{t('hello')}</p>
        <p>
          {t('todayis')} : {dayjs(new Date()).format('LLLL')}
        </p>
        <button className="btn btn-primary">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {JSON.stringify(countries)}
      </div>
    </Layout>
  );
};

export default Home;
