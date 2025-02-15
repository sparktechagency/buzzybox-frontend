import { useAppSelector } from '@/redux/hooks';
const CardPreview = () => {
      const { recipientName, senderName, title } = useAppSelector((state) => state.giftCardManagement);
      return (
            <div className="flex items-center justify-center h-full w-full">
                  <div
                        className="absolute inset-0  bg-center bg-cover bg-no-repeat z-0 rounded-lg"
                        style={{
                              backgroundImage: `url('https://s3-alpha-sig.figma.com/img/6abd/3727/594261572678155e84eaf710709ccc9c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A7hcJEzO384wfjvJDyhh0sHUIyNukejgyxcwd-y4GKJsyjp2cZ6aZo5eqlH6ZvR7TLaYpPWn2N31ZBN11rSDS0109yQYHgjj-9-M2pcg6oJFfJkNUH5j5ZKZ0IkLqo4uentanMRTgOf7FvsV9HllzbUf3jMgDj1CNdt~ReQ2lmOGYCDAeY5wQCddOpJficFOMGOmpRbGlFQB5kpt0Q--pZMd1nH6Vf7ajl7qJd-SIzo6~mdMFPJaDODLjSQZSANU1bLpEAOjl1v3PcHi19vvBJDLvtRVoByhUr5GZSKWhMJtiJUwhGRummRzhrG22yCD~IwNInk7wwqp66~m0wrdPg__')`,
                              filter: 'blur(1px)',
                        }}
                  />
                  <div className="">
                        <div
                              style={{
                                    backgroundImage: `url('https://s3-alpha-sig.figma.com/img/6abd/3727/594261572678155e84eaf710709ccc9c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A7hcJEzO384wfjvJDyhh0sHUIyNukejgyxcwd-y4GKJsyjp2cZ6aZo5eqlH6ZvR7TLaYpPWn2N31ZBN11rSDS0109yQYHgjj-9-M2pcg6oJFfJkNUH5j5ZKZ0IkLqo4uentanMRTgOf7FvsV9HllzbUf3jMgDj1CNdt~ReQ2lmOGYCDAeY5wQCddOpJficFOMGOmpRbGlFQB5kpt0Q--pZMd1nH6Vf7ajl7qJd-SIzo6~mdMFPJaDODLjSQZSANU1bLpEAOjl1v3PcHi19vvBJDLvtRVoByhUr5GZSKWhMJtiJUwhGRummRzhrG22yCD~IwNInk7wwqp66~m0wrdPg__`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                              }}
                              className="w-[340px] flex-center  h-[460px] custom-shadow rounded-lg relative z-30 bg-red-50"
                        >
                              <div className="text-center space-y-4">
                                    <h1 className="text-gray-600"> {recipientName ? recipientName : 'Recipient'}</h1>
                                    <h2 className="text-2xl font-semibold mb-4">{title ? title : 'Happy Birthday'}</h2>

                                    <p className="text-gray-500">From</p>
                                    <p className="text-gray-600">{senderName ? senderName : 'Sender Name'}</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CardPreview;
