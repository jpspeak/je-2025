import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/app/(shared)/components/ui/dialog";
import Image from "next/image";
import ShareModal from "@/app/(shared)/components/ShareModal";
import CalComModalTrigger from "@/app/(shared)/components/CalComModalTrigger";
import Comments from "@/app/(shared)/components/Comments";
import ModalContainer from "@/app/(shared)/components/ModalContainer";
import ModalCloseButton from "@/app/(shared)/components/ModalCloseButton";
import VideoPlayer from "@/app/(shared)/components/VideoPlayer";

function RecordingModal({ recording }: { recording: any }) {
  return (
    <Dialog open={true}>
      <DialogContent
        aria-describedby="Recording"
        hideCloseButton
        className="max-w-full h-svh  max-h-full bg-transparent border-none p-0 !rounded-none"
      >
        <DialogTitle className="hidden">Recording</DialogTitle>
        <ModalContainer>
          <ModalCloseButton className="z-[1] right-1 top-1" />

          <div className="hidden xl:flex fixed left-[calc(50%+435px+28px)] top-[112px] flex-col gap-[24px]">
            <div className="flex flex-col items-center">
              <ShareModal pathname={`recordings/${recording.slug?.current}`} />
              <p className="mt-[10px] text-sm font-semibold text-white">
                Share
              </p>
            </div>

            <div className="flex flex-col items-center">
              <CalComModalTrigger className="flex lg:w-[70px] hover:bg-current bg-white items-center justify-center size-[70px] border-[1px] rounded-full border-muted">
                <Image
                  src="/assets/images/telephone-stroke-rounded.svg"
                  height="22"
                  width="22"
                  alt="telephone-stroke-rounded"
                  className="invert"
                />
              </CalComModalTrigger>

              <p className="mt-[10px] text-sm font-semibold text-white">
                Quote
              </p>
            </div>
          </div>

          <div className="container px-0 max-w-[870px] lg:my-[70px] bg-white min-h-svh lg:h-auto">
            <div className="bg-black w-full pb-[75.8%] relative">
              <div className="w-full h-full absolute">
                <VideoPlayer
                  url={recording.video.asset.url}
                  isPlaying
                  showControls
                />
              </div>
            </div>
            <div className="px-6 pb-8 pt-4 lg:px-[75px] lg:pt-[20px] lg:pb-[40px]">
              <Comments identifier={recording._id} />
            </div>
          </div>
        </ModalContainer>
      </DialogContent>
    </Dialog>
  );
}

export default RecordingModal;
