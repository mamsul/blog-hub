'use client';

import { userStore } from '@/app/store';
import { userSchema } from '@/schema/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';
import { Button } from '../Button';
import FormCustomRadio from '../Form/FormCustomRadio';
import { FormInput } from '../Form/FormInput';
import { FormSelect } from '../Form/FormSelect';

type FormData = z.infer<typeof userSchema>;
type UserFormProps = {
  user?: IUser;
};

const UserForm = ({ user }: UserFormProps) => {
  const router = useRouter();
  const { createUserData, updateUserData, loading, success, error } =
    userStore();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      status: user?.status ?? 'active',
      gender: user?.gender ?? 'male',
      email: user?.email ?? '',
      name: user?.name ?? '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (error) {
      toast.error(error);

      setTimeout(() => {
        userStore.setState({ error: null });
      }, 500);
    }

    if (success) {
      reset();
      toast.success(success);
      setTimeout(() => {
        router.push('/users');
      }, 1500);
    }
  }, [success, error]);

  const onSubmit = (data: FormData) => {
    const userId = user?.id;

    if (user !== undefined) {
      updateUserData(userId as number, data);
    } else {
      createUserData(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex-col space-y-3 md:space-y-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm sm:text-base md:text-lg">
          Name
        </label>
        <FormInput
          {...register('name', { required: true })}
          id="name"
          placeholder="Type your name here"
          autoComplete="off"
        />
        {errors?.name && (
          <p className="text-sm text-red-600">{errors?.name?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm sm:text-base md:text-lg">
          Email
        </label>
        <FormInput
          {...register('email', { required: true })}
          id="email"
          type="email"
          placeholder="Type your email here"
          autoComplete="off"
        />
        {errors?.email && (
          <p className="text-sm text-red-600">{errors?.email?.message}</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex w-full flex-col gap-2">
          <label className="text-sm sm:text-base md:text-lg">Gender</label>
          <FormSelect
            {...register('gender', { required: true })}
            options={['male', 'female']}
          />
          {errors?.gender && (
            <p className="text-sm text-red-600">{errors?.gender?.message}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-2">
          <label className="text-sm sm:text-base md:text-lg">Status</label>
          <div className="grid grid-cols-2 gap-2">
            <FormCustomRadio
              watch={watch}
              register={register}
              name="status"
              value="active"
              label="Active"
            />
            <FormCustomRadio
              watch={watch}
              register={register}
              name="status"
              value="inactive"
              label="Inactive"
            />
          </div>
        </div>
      </div>

      <div className="w-3/12 pt-5">
        <Button
          variant="highlight"
          disabled={loading}
          className="h-10 text-sm tracking-wide lg:h-12 lg:text-base">
          {loading ? 'Please wait...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
