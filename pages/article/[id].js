import React from 'react';
import { useRouter } from 'next/router';
import { BaseContainer, Article, Error } from '../../components';
import { FetchIndividualArticle } from '../api/Routes/Articles';

export default function Articles({ data }) {
  const router = useRouter();

  if (!data) {
    const errorMessage = {
      type: 404,
      title: 'Page Not Found',
      reason: "The page you are looking for doesn't exist",
      actionDisplay: 'Go to Home',
      action: () => router.push('/')

    };
    return (
      <BaseContainer page="Events">
        <Error error={errorMessage} />
      </BaseContainer>
    );
  }
  return (
    <BaseContainer page={data.title}>
      <Article article={data} />
    </BaseContainer>
  );
}

export const getServerSideProps = async (props) => {
  const id = props.req.url.replace('?', 'Q').split('-id-')[1];
  if (!id) {
    return { props: { data: null } };
  }
  try {
    const article = await FetchIndividualArticle(id);
    return { props: { data: article } };
  } catch (error) {
    return { props: { data: null } };
  }
};
