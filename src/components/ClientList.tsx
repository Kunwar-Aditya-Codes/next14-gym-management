'use client';
import { trpc } from '@/trpc/client';
import ClientCard from './ClientCard';
import { Skeleton } from './ui/skeleton';
import { TClientValidator } from '@/lib/validators/client-validator';

interface ClientListProps {
  adminId: string;
}

export interface ClientInfo extends TClientValidator {
  userId: string;
  id: string;
}

const ClientList = ({ adminId }: ClientListProps) => {
  const { data: allClients, isLoading } = trpc.admin.getClients.useQuery({
    adminId,
  });

  // TODO: Handle no clients

  const FALLBACK_LIMIT = 4;

  const clients = allClients?.clients;

  let map: (ClientInfo | null)[] = [];

  if (clients && clients.length) {
    map = clients;
  } else if (isLoading) {
    map = new Array<null>(FALLBACK_LIMIT).fill(null);
  }

  return (
    <>
      {map.map((client, i) => {
        if (!client) {
          return <Skeleton key={i} className='h-16 w-full rounded-lg' />;
        }

        return <ClientCard key={i} client={client} />;
      })}
    </>
  );
};
export default ClientList;
