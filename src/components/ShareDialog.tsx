import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Link as LinkIcon, Check } from "lucide-react";
import { toast } from "sonner";

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
  recipeTitle: string;
  recipeId: string;
}

const ShareDialog = ({ isOpen, onClose, recipeTitle, recipeId }: ShareDialogProps) => {
  const [copied, setCopied] = useState(false);
  const recipeUrl = `${window.location.origin}/recipe/${recipeId}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(recipeUrl);
      setCopied(true);
      toast.success("Bağlantı kopyalandı!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Bağlantı kopyalanamadı");
    }
  };

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(recipeUrl);
    const encodedTitle = encodeURIComponent(recipeTitle);
    
    let shareUrl = "";
    
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "instagram":
        toast.info("Instagram web üzerinden doğrudan paylaşımı desteklemiyor");
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-foreground">Tarifi Paylaş</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Button
            variant="outline"
            className="justify-start gap-3"
            onClick={() => handleShare("facebook")}
          >
            <Facebook className="h-5 w-5 text-blue-600" />
            <span className="text-foreground">Facebook'ta Paylaş</span>
          </Button>
          
          <Button
            variant="outline"
            className="justify-start gap-3"
            onClick={() => handleShare("twitter")}
          >
            <Twitter className="h-5 w-5 text-sky-500" />
            <span className="text-foreground">X'te Paylaş</span>
          </Button>
          
          <Button
            variant="outline"
            className="justify-start gap-3"
            onClick={() => handleShare("instagram")}
          >
            <Instagram className="h-5 w-5 text-pink-600" />
            <span className="text-foreground">Instagram'da Paylaş</span>
          </Button>
          
          <div className="border-t border-border pt-4">
            <Button
              variant="secondary"
              className="w-full justify-start gap-3"
              onClick={handleCopyLink}
            >
              {copied ? (
                <Check className="h-5 w-5 text-green-600" />
              ) : (
                <LinkIcon className="h-5 w-5" />
              )}
              <span className="text-foreground">
                {copied ? "Bağlantı Kopyalandı!" : "Bağlantıyı Kopyala"}
              </span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
