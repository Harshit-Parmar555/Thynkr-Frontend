import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DeleteIdeaDialog = ({
  deleteIdea,
  trigger,
  loading,
  open,
  onOpenChange,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogTrigger asChild>{trigger}</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Idea</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete this idea? This action cannot be
          undone.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="flex justify-end gap-2">
        <Button variant="outline" type="button" data-cancel>
          Cancel
        </Button>
        <Button variant="destructive" onClick={deleteIdea} disabled={loading}>
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default DeleteIdeaDialog;
