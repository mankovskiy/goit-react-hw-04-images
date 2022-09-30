import { Grid } from 'react-loader-spinner';

export const Loader = () => (
  <Grid
    height="80"
    width="80"
    color="grey"
    ariaLabel="grid-loading"
    radius="12.5"
    wrapperStyle={{ margin: 'auto' }}
    wrapperClass=""
    visible={true}
  />
);
