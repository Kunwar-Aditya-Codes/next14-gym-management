import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from './ui/button';
import ClientForm from './ClientForm';

const AddClientDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} className={'border border-zinc-700'}>
          New Client
        </Button>
      </DialogTrigger>
      <DialogContent>
        <ClientForm />
      </DialogContent>
    </Dialog>
  );
};
export default AddClientDialog;
