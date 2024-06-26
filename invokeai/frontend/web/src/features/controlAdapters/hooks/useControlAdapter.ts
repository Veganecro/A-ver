import { createMemoizedSelector } from 'app/store/createMemoizedSelector';
import { useAppSelector } from 'app/store/storeHooks';
import {
  selectControlAdapterById,
  selectControlAdaptersSlice,
} from 'features/controlAdapters/store/controlAdaptersSlice';
import { useMemo } from 'react';

export const useControlAdapter = (id: string) => {
  const selector = useMemo(
    () =>
      createMemoizedSelector(selectControlAdaptersSlice, (controlAdapters) =>
        selectControlAdapterById(controlAdapters, id)
      ),
    [id]
  );

  const controlAdapter = useAppSelector(selector);

  return controlAdapter;
};
