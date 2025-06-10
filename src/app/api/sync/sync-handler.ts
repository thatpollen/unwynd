import { NextResponse } from 'next/server';
import { logger } from '../common/clients';
import SyncService from './sync-service';

const service = new SyncService();

const syncRecentCustomers = async () => {
  logger.info('Handler::Sync-Customers::Start');

  await service.syncCustomers();

  return NextResponse.json({
    message: 'Customers synced successfully',
  });
};

export { syncRecentCustomers };
