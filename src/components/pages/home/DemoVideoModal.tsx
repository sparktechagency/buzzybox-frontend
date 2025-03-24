import { ConfigProvider, Modal } from 'antd';

const DemoVideoModal = ({ open, setOpen }: { open: boolean; setOpen: (e: boolean) => void }) => {
      return (
            <ConfigProvider
                  theme={{
                        token: {
                              padding: 0,
                              paddingLG: 0,
                        },
                  }}
            >
                  <Modal
                        centered
                        open={open}
                        onOk={() => setOpen(false)}
                        onCancel={() => setOpen(false)}
                        footer={null}
                        closeIcon={false}
                        width="1024px"
                        style={{ padding: 0 }}
                  >
                        <iframe
                              className="w-full h-[70vh]"
                              src="https://www.youtube.com/embed/vguVVW1UOjY?si=tZxFHgu-fZf7Dvnh"
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                        ></iframe>
                  </Modal>
            </ConfigProvider>
      );
};

export default DemoVideoModal;
