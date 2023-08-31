import { Discuss } from 'react-loader-spinner';

export function AppLoader() {
  return (
    <Discuss
    visible={true}
    height="80"
    width="80"
    ariaLabel="comment-loading"
    wrapperStyle={{}}
    wrapperClass="comment-wrapper"
    color="#fff"
    backgroundColor="#F4442E"
  />
  );
}
