import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown){
  const prismic = Prismic.client(
    'https://dashboardignews.prismic.io/api/v2',
    {
      req,
      accessToken: 'MC5ZazJ2dEJjQUFDa0F5MVoy.Ce-_ve-_ve-_ve-_vVop77-977-977-9Au-_vX_vv73vv71W77-977-9fH8377-9W2Xvv73vv70K77-977-9aBbvv70'
    }
  )

  return prismic;
}