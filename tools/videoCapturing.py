import cv2 as cv

class VIDEOCAPTURE():
    def __init__(self, captured):
         self.captured = cv.VideoCapture(0)

    def capturingProcess(self):
        cap = self.captured
        while True:
            ret, frame = cap.read()
            vid = cv.imshow('frame',frame)
        return vid

    def Endsession(self):
        end = self.captured.release()
        cv.destroyAllWindows()
        return end
