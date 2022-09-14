<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();
       // $schedule->call('App\Http\Controllers\api\AttendanceController@index')->dailyAt('11:00')->timezone('Asia/Karachi');
    //    $schedule->call('App\Http\Controllers\api\AttendanceController@index')->dailyAt('23:00')->timezone('Asia/Karachi');

       $schedule->call('App\Http\Controllers\api\AttendanceController@print')->everyMinute();

    //    $schedule->call('App\Http\Controllers\api\AttendanceController@index')->dailyAt('23:10')->timezone('Asia/Karachi');

    //    $schedule->call('App\Http\Controllers\api\AttendanceController@index')->dailyAt('23:20')->timezone('Asia/Karachi');

    //    $schedule->call('App\Http\Controllers\api\AttendanceController@index')->dailyAt('23:25')->timezone('Asia/Karachi');
         
        //$schedule->call('App\Http\Controllers\api\AttendanceController@index')->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
