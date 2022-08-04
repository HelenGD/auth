import { useFormikContext } from 'formik';
import { FC, PropsWithChildren } from 'react';
import { Button } from 'shared/ui/button';

export const ButtonSubmit: FC<PropsWithChildren<{}>> = ({ children }) => {
  const form = useFormikContext();
  const isDisabled = !form.isValid || form.isSubmitting;

  return (
    <div>
      <Button type="submit" disabled={isDisabled}>
        {children}
      </Button>
    </div>
  );
};
